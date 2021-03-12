<br><br><br>

<p>ARTICLES:</p>

<div class="ArticleSections">

    <?php

    /** @var PDO $connection */
    $Articles = $connection->query('select * from articles order by id');


    foreach ($Articles as $i => $article):
    ?>
        <div class="Article">
            <a href="/articles?id=<?php echo $article['id']; ?>">
                <img src="<?php echo $article['img']; ?>">
                <div class="ArticleGradient">
                    <?php echo $article['views']; ?> watched
                    <br>
                    <?php echo (new DateTime())->diff(new DateTime($article['date']))->y; ?> year ago
                    <br>
                    <?php echo $article['description']; ?>
                </div>
            </a>
        </div>
    <?php endforeach; ?>

</div>
