<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(2);
$setting->local()->field("subtitle1")->label("Subtitle1");


return $setting();
