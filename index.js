"use strict";

jQuery(document).ready(function($) {
    
    $(".contact__info").hide();
    $(".news__content").hide();
    $(".image__architecture").hide();
    $(".image__design").hide();
    $(".image__light").hide();
    $(".image__gastro").hide();

    $(".content__contact").hover(
        function() {
            $(".contact__info").show();
            $(".news__content").hide();
        }
    );

    $(".contact__info").hover(
        function() {
            $(".contact__info").show();
        }
    );

    $(".content__contact").click(
        function() {
            $(".contact__info").toggle();
        }
    );

    $(".content__news").hover(
        function() {
            $(".news__content").show();
            $(".contact__info").hide();
        }
    );

    $(".content__news").click(
        function() {
            $(".news__content").toggle();
        }
    );

    $(".content__architecutre").hover(
        function() {
            $(".image__architecture").show();
        },function() {
            $(".image__architecture").hide();
        }
    );

    $(".content__architecutre").click(
        function() {
            $(".image__architecture").toggle();
        }
    );

    $(".content__design").hover(
        function() {
            $(".image__design").show();
        },function() {
            $(".image__design").hide();
        }
    );

    $(".content__design").click(
        function() {
            $(".image__design").toggle();
        }
    );

    $(".content__light").hover(
        function() {
            $(".image__light").show();
        },function() {
            $(".image__light").hide();
        }
    );

    $(".content__light").click(
        function() {
            $(".image__light").toggle();
        }
    );


    $(".content__gastro").hover(
        function() {
            $(".image__gastro").show();
        },function() {
            $(".image__gastro").hide();
        }
    );

    $(".content__gastro").click(
        function() {
            $(".image__gastro").toggle();
        }
    );

    $(".whole_page").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").hide();
        }
    );
});