<?php

namespace app\tiers\website\api\controllers;

use Yii;
use app\components\inherits\rest\Controller;

class CareerController extends Controller
{
    public function actionCareer()
    {
        $postData = Yii::$app->request->post();
        $name = $postData['name'];
        $email = $postData['email'];
        $phone = $postData['phone'];
        $job = $postData['job'];
        $fileUrl = Yii::getAlias($postData['file']['path']);
        $fileExtension = $postData['file']['extension'];
        $htmlBody = "
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    margin-bottom: 20px;
                }
                strong {
                    color: #555;
                }
                .apply-message {
                    background-color: #f7f7f7;
                    padding: 10px;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <h1>Recruitment Application</h1>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Position Applied For:</strong>  $job</p>
                <div class='apply-message'>
                    <p><strong>Application Message:</strong></p>
                    <p> $job</p>
                </div>
            </div>
        </body>
        </html>
    ";

        Yii::$app->mailer->compose()
            ->setFrom($email)
            ->setTo(Yii::$app->params['senderEmail'])
            ->setSubject('Career Application')
            ->setHtmlBody($htmlBody)
            ->attach($fileUrl, ['fileName' => 'resume.' . $fileExtension]) // Attach the file with its extension
            ->send();

        // return "Recruitment application sent successfully";
    }
}
