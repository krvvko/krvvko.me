<?php

$file = __DIR__."/visits/visits-" . $_GET["id"];

if (! file_exists($file)) {
     file_put_contents($file, 0);
}

$viewsBefore = file_get_contents($file);

file_put_contents($file, $viewsBefore + 1);