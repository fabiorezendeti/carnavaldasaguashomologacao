function vermaisBrasil() {
    var readMoreHtml = $(".read-more-brasil").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil").html(readMoreHtml).append("<a href='' class='show-less-link'> mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};
function vermaisBrasilRenan() {
    var readMoreHtml = $(".read-more-brasil-renan").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-renan").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-renan").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-renan").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-renan").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilFaladores() {
    var readMoreHtml = $(".read-more-brasil-faladores").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-faladores").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-faladores").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-faladores").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-faladores").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilBolaPreta() {
    var readMoreHtml = $(".read-more-brasil-bola").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-bola").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-bola").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-bola").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-bola").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};



function vermaisBrasilNovoLinguarudos() {
    var readMoreHtml = $(".read-more-brasil-novolinguarudo").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-novolinguarudo").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-novolinguarudo").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-novolinguarudo").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-novolinguarudo").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilAtentados() {
    var readMoreHtml = $(".read-more-brasil-atentados").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-atentados").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-atentados").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-atentados").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-atentados").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilReizinho() {
    var readMoreHtml = $(".read-more-brasil-reizinho").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-reizinho").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-reizinho").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-reizinho").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-reizinho").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilMaluco() {
    var readMoreHtml = $(".read-more-brasil-maluco").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-maluco").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-maluco").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-maluco").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-maluco").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};


function vermaisBrasilPantera() {
    var readMoreHtml = $(".read-more-brasil-pantera").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-pantera").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-pantera").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-pantera").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-pantera").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilMajestade() {
    var readMoreHtml = $(".read-more-brasil-majestade").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-majestade").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-majestade").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-majestade").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-majestade").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilBicharada() {
    var readMoreHtml = $(".read-more-brasil-bicharada").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-brasil-bicharada").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-bicharada").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-bicharada").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-bicharada").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilLinkElizane() {
    var readMoreHtml = $(".read-more-brasil-elizane").html();
    var lessText = readMoreHtml.substr(0, 900);

    if (readMoreHtml.length > 900) {
        $(".read-more-brasil-elizane").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-elizane").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-elizane").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-elizane").html(readMoreHtml.substr(0, 900)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilLinkViviane() {
    var readMoreHtml = $(".read-more-brasil-link-viviane").html();
    var lessText = readMoreHtml.substr(0, 900);

    if (readMoreHtml.length > 900) {
        $(".read-more-brasil-link-viviane").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-link-viviane").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-link-viviane").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-link-viviane").html(readMoreHtml.substr(0, 900)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};

function vermaisBrasilLinkRenan() {
    var readMoreHtml = $(".read-more-brasil-link-renan").html();
    var lessText = readMoreHtml.substr(0, 900);

    if (readMoreHtml.length > 900) {
        $(".read-more-brasil-link-renan").html(lessText).append("<a href='' class='read-more-link'> mostrar mais</a>");
    } else {
        $(".read-more-brasil-link-renan").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-link-renan").html(readMoreHtml).append("<a href='' class='show-less-link'>mostrar menos</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-brasil-link-renan").html(readMoreHtml.substr(0, 900)).append("<a href='' class='read-more-link'> mostrar mais</a>");
    });
};
function vermaisInglesRenan() {
    var readMoreHtml = $(".read-more-ingles-renan").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-renan").html(lessText).append("<a href='' class='read-more-link'> show more</a>");
    } else {
        $(".read-more-ingles-renan").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-renan").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-renan").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};
function vermaisIngles() {
    var readMoreHtml = $(".read-more-ingles").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesFaladores() {
    var readMoreHtml = $(".read-more-ingles-faladores").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-faladores").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-faladores").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-faladores").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-faladores").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};
function vermaisInglesBolaPreta() {
    var readMoreHtml = $(".read-more-ingles-bola").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-bola").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-bola").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-bola").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-bola").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesNovoLinguarudos() {
    var readMoreHtml = $(".read-more-ingles-novolinguarudo").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-novolinguarudo").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-novolinguarudo").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-novolinguarudo").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-novolinguarudo").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesAtentados() {
    var readMoreHtml = $(".read-more-ingles-atentados").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-atentados").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-atentados").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-atentados").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-atentados").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesReizinho() {
    var readMoreHtml = $(".read-more-ingles-reizinho").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-reizinho").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-reizinho").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-reizinho").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-reizinho").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};
function vermaisInglesMaluco() {
    var readMoreHtml = $(".read-more-ingles-maluco").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-maluco").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-maluco").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-maluco").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-maluco").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesPantera() {
    var readMoreHtml = $(".read-more-ingles-pantera").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-pantera").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-pantera").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-pantera").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-pantera").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesMajestade() {
    var readMoreHtml = $(".read-more-ingles-majestade").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-majestade").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-majestade").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-majestade").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-majestade").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesBicharada() {
    var readMoreHtml = $(".read-more-ingles-bicharada").html();
    var lessText = readMoreHtml.substr(0, 300);

    if (readMoreHtml.length > 300) {
        $(".read-more-ingles-bicharada").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-bicharada").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-bicharada").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-bicharada").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> show more</a>");
    });
};


function vermaisInglesLinksElizane() {
    var readMoreHtml = $(".read-more-ingles-elizane").html();
    var lessText = readMoreHtml.substr(0, 900);

    if (readMoreHtml.length > 900) {
        $(".read-more-ingles-elizane").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-elizane").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-elizane").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-elizane").html(readMoreHtml.substr(0, 900)).append("<a href='' class='read-more-link'> show more</a>");
    });
};


function vermaisInglesLinksViviane() {
    var readMoreHtml = $(".read-more-ingles-viviane").html();
    var lessText = readMoreHtml.substr(0, 900);

    if (readMoreHtml.length > 900) {
        $(".read-more-ingles-viviane").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-viviane").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-viviane").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-viviane").html(readMoreHtml.substr(0, 900)).append("<a href='' class='read-more-link'> show more</a>");
    });
};

function vermaisInglesLinksRenan() {
    var readMoreHtml = $(".read-more-ingles-link-renan").html();
    var lessText = readMoreHtml.substr(0, 900);

    if (readMoreHtml.length > 900) {
        $(".read-more-ingles-link-renan").html(lessText).append("<a href='' class='read-more-link'>show more</a>");
    } else {
        $(".read-more-ingles-link-renan").html(readMoreHtml);
    }

    $("body").on("click", ".read-more-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-link-renan").html(readMoreHtml).append("<a href='' class='show-less-link'>show less</a>");
    });

    $("body").on("click", ".show-less-link", function (event) {
        event.preventDefault();
        $(this).parent(".read-more-ingles-link-renan").html(readMoreHtml.substr(0, 900)).append("<a href='' class='read-more-link'> show more</a>");
    });
};