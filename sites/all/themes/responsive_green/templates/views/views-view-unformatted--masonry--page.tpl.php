<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php print $row; ?>
  </div>
<?php endforeach; ?>

<?php 
	//$soursePath = path_to_theme().'/css/'; 
	//drupal_add_css($soursePath.'my_custom_styles.css');

	drupal_add_css(drupal_get_path('theme', 'responsive_green') . '/css/my_custom_styles.css', array('group' => CSS_THEME, 'type' => 'file'));

	//drupal_add_css('body {background: #000;}', array('group' => CSS_THEME, 'type' => 'inline'));

	//drupal_add_css('http://example.com/css/reset.css', array('group' => CSS_THEME, 'type' => 'external'));
?>
