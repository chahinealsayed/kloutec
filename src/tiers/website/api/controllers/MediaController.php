<?php

namespace app\tiers\website\api\controllers;

use app\components\inherits\rest\Controller;
use Exception;

class MediaController extends Controller
{
    public function actionUploadImage()
    {
        try {
            return uploadManager()->image(post('section', 'images'), post('base64'));
        } catch (Exception $e) {
            error($e->getMessage(), $e->getTrace());
        }
    }

    public function actionUploadFile()
    {
        try {
            return uploadManager()->file(post('section', 'files'), post('name'), post('base64'));
        } catch (Exception $e) {
            error($e->getMessage(), $e->getTrace());
        }
    }
}
