<?php

$_GET ["id"];
$viewsBefore = file_get_contents(__DIR__."/visits/visits-".$_GET ["id"]);

$ViewsAfter = $viewsBefore + 1;

file_put_contents(__DIR__."/visits/visits-".$_GET ["id"], $ViewsAfter);