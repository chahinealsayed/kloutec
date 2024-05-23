<?php

use app\lib\cms\ContentType;

$setting = new ContentType();


$setting->local()->field("experience")->label("Experience");
$setting->local()->field("job")->label("Job Type");
$setting->local()->field("published")->label("Published at");

return $setting();
