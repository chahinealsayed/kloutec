<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(1);
$setting->col2()->field("gallery")->label("Gallery")->type("gallery")->prop("accept", "images/jpg");

return $setting();
