<?php

$recepient = "vit.vasilev2018@yandex.ru";
$sitename = "Цифровой элемент";

$name = trim($_POST['form_name']);
$phone = trim($_POST["form_email"]);
$text = trim($_POST["form_message"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $r

?>