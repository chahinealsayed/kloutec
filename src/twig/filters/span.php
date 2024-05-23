<?php

namespace app\twig\filters;

use app\lib\TwigFilter;
use Twig\Markup;
use yii\helpers\Inflector;

class Span extends TwigFilter
{
    public function __construct(
        public string $content,
        public  string $keyword,
        public string $color,
        // public string $bold
    ) {
    }
    public static function name(): string
    {
        return 'span';
    }
    public function execute()
    {
        $cls = Inflector::slug($this->keyword);
        // return new Markup(str_replace($this->keyword, "<span class='span span-$cls' style='--color:$this->color';>$this->keyword</span>", nl2br(htmlentities($this->content, ENT_QUOTES, 'UTF-8'))), 'UTF-8');
        return new Markup(str_replace($this->keyword, "<span class='span span-$cls' style='color:$this->color;font-weight:bold;'>$this->keyword</span>", $this->content), 'UTF-8');
    }
}
