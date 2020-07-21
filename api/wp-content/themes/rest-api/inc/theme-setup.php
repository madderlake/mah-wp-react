<?php

///////////////////////////////////
// Register menus, Add Support for and Enqueue Editor Styles
///////////////////////////////////

add_action( 'after_setup_theme', 'react_wp_rest_setup' );
function react_wp_rest_setup() {
	register_nav_menus(
		array( 'main-menu' => __( 'Main Menu', 'react_wp_rest' ) )
	);
	//add_theme_support( 'editor-styles' );
	add_theme_support( 'wp-block-styles' );

	// Enqueue editor styles.
	add_editor_style( 'assets/css/style-editor.css' );
}


///////////////////////////////////
// Enable upload of VCF, SVG
///////////////////////////////////

function custom_mime_types($mime_types){
	$mime_types['svg'] = 'image/svg+xml'; //Adding svg extension
	return $mime_types;
}
add_filter('upload_mimes', 'custom_mime_types', 1, 1);

///////////////////////////////////
// Update REST URL to match WordPress URL instead of SiteURL
///////////////////////////////////

add_filter( 'rest_url', 'biologos_update_rest_url', 10, 4 );
function biologos_update_rest_url( $url, $path, $blog_id, $scheme ){
	$newUrl = str_replace(get_home_url(), get_site_url(), $url);

	return $newUrl;
}
add_action(
	'rest_api_init',
	function () {

		if ( ! function_exists( 'use_block_editor_for_post_type' ) ) {
			require ABSPATH . 'wp-admin/includes/post.php';
		}

		// Surface all Gutenberg blocks in the WordPress REST API
		$post_types = get_post_types_by_support( [ 'editor' ] );
		foreach ( $post_types as $post_type ) {
			if ( use_block_editor_for_post_type( $post_type ) ) {
				register_rest_field(
					$post_type,
					'blocks',
					[
						'get_callback' => function ( array $post ) {
							return parse_blocks( $post['content']['raw'] );
						},
					]
				);
			}
		}
	}
);
/**
 * Add a Formatted Date to the WordPress REST API JSON Post Object
 *
 * https://adambalee.com/?p=1547
 */
add_action('rest_api_init', function() {
    register_rest_field(
        array('post'),
        'formatted_date',
        array(
            'get_callback'    => function() {
                return get_the_date();
            },
            'update_callback' => null,
            'schema'          => null,
        )
    );
});

?>
