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

    $(".content__news").hover(
        function() {
            $(".news__content").show();
            $(".contact__info").hide();
        }
    );

    $(".content__architecutre").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").hide();
            $(".image__architecture").show();
        },function() {
            $(".image__architecture").hide();
        }
    );

    $(".content__design").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").hide();
            $(".image__design").show();
        },function() {
            $(".image__design").hide();
        }
    );

    $(".content__light").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").hide();
            $(".image__light").show();
        },function() {
            $(".image__light").hide();
        }
    );

    $(".content__gastro").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").hide();
            $(".image__gastro").show();
        },function() {
            $(".image__gastro").hide();
        }
    );

    $(".whole_page").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").hide();
        }
    );
});