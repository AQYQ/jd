<template>
    <div id="shortcut">
        <div class="main">
            <ul class="fl">
                <li>北京</li>
            </ul>
            <ul class="fr"></ul>
        </div>
    </div>
</template>
<style>
    #shortcut{
        border-bottom: 1px solid #ddd;
        background-color: #e3e4e5;
    }
    #shortcut .main{
        height: 30px;
        line-height: 30px;
        color: #999;
        width: 1190px;
        margin: auto;
    }
    /* 左浮动的地点选择 */
    .fl{
        float: left;
    }
    /* 右浮动的菜单 */
    .fr{
        float: right;
    }
</style>