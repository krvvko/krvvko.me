<br><br><br>

<p>ARTICLES:</p>

<div class="ArticleSections">

    <?php
    $Articles = json_decode(file_get_contents(__DIR__ . "/../../articles/Articles.json"));

    foreach ($Articles as $i => $article):
    ?>
        <div class="Article">
            <a href="/articles?id=<?php echo $i; ?>">
                <img src="<?php echo $article->img; ?>">
                <div class="ArticleGradient">
                    <?php

                    $count = file_get_contents(__DIR__."/../../articles/visits/visits-$i");

                    echo $count;

                    ?> watched
                    <br>
                    <?php echo (new DateTime())->diff(new DateTime($article->date))->y; ?> year ago
                    <br>
                    <?php echo $article->description; ?>
                </div>
            </a>
        </div>
    <?php endforeach; ?>

</div>
