<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(1);
return $setting();
