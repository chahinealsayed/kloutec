<?php

return [
    [
        "route" => "/default/content",
        "pattern" => "About",
        "defaults" => [
            "id" => "cms.contents.default.about-us.1",
        ],
    ],
    [
        "route" => "/default/content",
        "pattern" => "Careers",
        "defaults" => [
            "id" => "cms.contents.default.careers",
        ],
    ],
    [
        "route" => "/default/content",
        "pattern" => "Talk",
        "defaults" => [
            "id" => "cms.contents.default.talk.1",
        ],
    ],
    [
        "route" => "/default/content",
        "pattern" => "Contact-Us",
        "defaults" => [
            "id" => "cms.contents.default.contact",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "Services",
        "defaults" => [
            "type" => "services",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "Projects",
        "defaults" => [
            "type" => "projects",
        ],
    ],
    'Contents/<id:.+>' => '/default/content',
];
