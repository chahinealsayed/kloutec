<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->col1()->field("tags")->label("Tags")->type("tags")->defaultValue([]);
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->local()->field("description")->type('text')->label("Description");


return $setting();
