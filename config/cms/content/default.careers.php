<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(1);
$setting->local()->field("subtitle1")->label("Subtitle1");
$setting->local()->field("subtitle2")->label("Subtitle2");
$files = $setting->repeater("cont");
$setting->col1()->field("cont")->label("Items")->type("repeater")->defaultValue([])->prop("layout", [
    [
        $files->field("title")->label("Title")->toArray(),
        $files->field("description")->type('text')->label("Description")->toArray(),

    ],
]);

return $setting();
