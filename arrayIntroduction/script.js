var pages = {
    'string': 'String page',
    'lastElement': 'Last Element page',
    'push': 'Push page'
}

function loadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function getPageContent(page) {
    var content
    switch (page) {
        case 'string':
            content = loadPage('string.html')
            break;

        case 'lastElement':
            content = loadPage('last-element.html')
            break;

        case 'push':
            content = loadPage('push.html')
            break;

        case 'pop':
            content = loadPage('pop.html')
            break;

        case 'unshift':
            content = loadPage('unshift.html')
            break;

        case 'splice':
            content = loadPage('splice.html')
            break;

        case 'shift':
            content = loadPage('shift.html')
            break;

        case 'sort':
            content = loadPage('sort.html')
            break;

        case 'reverse':
            content = loadPage('reverse.html')
            break;

        default:
            content = loadPage('string.html')
            break;
    }
    document.getElementById('content').innerHTML = content
}