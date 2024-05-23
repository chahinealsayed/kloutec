<?php

namespace app\tiers\website\api\controllers;

use app\components\inherits\rest\Controller;
use app\enums\ContentStatus;
use app\models\Content;
use Exception;
use yii\data\ActiveDataProvider;

class CareersController extends Controller
{
    public function actionCareers()
    {
        $query =  Content::find()->where(['type' => 'careers', 'status' => ContentStatus::ACTIVE->value]);
        return createObject([
            'class' => ActiveDataProvider::class,
            'query' => $query,
        ]);
    }
}
