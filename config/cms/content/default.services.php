<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(1);
$setting->local()->field("subtitle1")->label("Subtitle1");
$setting->local()->field("subtitle2")->label("Subtitle2");
$setting->local()->field("description")->label("Description")->type('text');
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");

return $setting();
