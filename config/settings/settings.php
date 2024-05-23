<?php

use app\lib\cms\Setting;

$setting = new Setting();

$general = $setting->category("general")->label("General");
$general->field("logo")->type("image")->label("Logo")->defaultValue("")->attribute("accept", "images/*");
$general->field("year")->type("string")->label("Year")->defaultValue("1987")->attribute("type", "number")->attribute("min", 0)->attribute("max", 9999);

$social = $setting->category("social")->label("Social Media");
$social->field("facebook")->label("Facebook")->icon("mdiFacebook")->defaultValue("#");
$social->field("instagram")->label("Instagram")->icon("mdiInstagram")->defaultValue("#");
$social->field("linkedin")->label("Linkedin")->icon("mdiLinkedin")->defaultValue("#");
$social->field("twitter")->label("Twitter")->icon("mdiTwitter")->defaultValue("#");
$social->field("phone")->label("Phone")->icon("mdiPhone")->defaultValue("#");
$social->field("email")->label("Email")->icon("mdiEmail")->defaultValue("#");

$location = $setting->category("location")->label("Location");
$location->field("street")->label("Street")->defaultValue("#");
$location->field("level")->label("Level")->defaultValue("#");
$location->field("office")->label("Office")->defaultValue("#");



$agency = $setting->category("agency")->label("Agency");
$agency->field("experience")->label("Experience")->defaultValue("#");
$agency->field("job")->label("Job")->defaultValue("#");
$agency->field("developer")->label("Developer")->defaultValue("#");
$agency->field("client")->label("Client")->defaultValue("#");

$map = $setting->category("map")->label("Map");
$map->field("link")->label("Link")->defaultValue("#");
$map->field("embed")->label("Embed")->defaultValue("#");



return $setting();
