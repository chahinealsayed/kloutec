<?php

namespace app\lib\cms;

class Setting
{
    private array $_categories = [];

    public function category(string $name): SettingCategory
    {
        $category = new SettingCategory($name);
        return $this->_categories[] = $category;
    }

    public function toArray(): array
    {
        return array_map(function ($category) {
            return $category->toArray();
        }, $this->_categories);
    }

    public function __invoke(): array
    {
        return $this->toArray();
    }
}
