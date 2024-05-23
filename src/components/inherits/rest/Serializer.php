<?php

namespace app\components\inherits\rest;

use yii\rest\Serializer as RestSerializer;

class Serializer extends RestSerializer
{

    protected function serializeModelErrors($model)
    {
        $this->response->setStatusCode(422, 'Data Validation Failed.');
        $result = [];
        foreach ($model->getFirstErrors() as $name => $message) {
            if (!isset($result[$name])) {
                $result[$name] = [];
            }
            $result[$name][] = $message;
        }

        return error('Data Validation Failed', $result, false, 422);
    }
}
