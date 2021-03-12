<?php
/** @var PDO $connection */
$query = $connection->prepare('select title, content_EN from articles where id = :id limit 1');
$query->execute([':id' => $_GET['id']]);
$article = $query->fetchObject();


$query = $connection->prepare('update articles set views = views + 1 where id = :id');
$query->execute([':id' => $_GET['id']]);

?>

<br>
<br>
<br>

<p><?php echo $article->title ?></p>

<div class="ArticleSectionsText">

    <?php if(!$article->content_EN): ?>

    <div class="ArticleSectionsTextContent">

        <span class="ArticleMiddle">Not done yet</span>

    </div>

    <?php else: ?>

        <?php echo $article->content_EN; ?>

    <?php endif; ?>

</div>


