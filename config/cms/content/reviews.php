<?php

use app\lib\cms\ContentType;

$setting = new ContentType();
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->col2()->field("specialist")->label("Specialist");
$setting->col2()->field("stars")->label("Stars")->type("string");

return $setting();
