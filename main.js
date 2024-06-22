// (setq js-indent-level 1)  # for Emacs

function get_page_from_url() {
 let href = window.location.href;
 let url = new URL(href);
 let search = url.search  // ?X
 let verse = search.substr(1)  // drop initial ?
 verse = verse.replace(/\D/g, ''); // remove non-digits
 return verse;
}

function get_verse_html(page) {
 let html = null;
 if (page == '') {page = '1';}
 let ipage = parseInt(page,10); // base 10
 if ((ipage < 1) || (ipage > 590)) {
  page = '1';
 }
 let nnn = page.padStart(3,'0');
 let pdfcur = `pg_${nnn}.pdf`;
 let urlcur = `pdfpages/${pdfcur}`;
 let android = ` <a href='${urlcur}' style='position:relative; left:100px;'>Click to load pdf</a>`;
 let imageElt = `<object id='servepdf' type='application/pdf' data='${urlcur}' 
              style='width: 98%; height:98%'> ${android} </object>`;
 return imageElt;
}

function display_verse_html(page) {
 //verse_id(indexes);
 let html = get_verse_html(page);
 let elt=document.getElementById('verse');
 elt.innerHTML = html;
}

function display_verse_url() {
 let page = get_page_from_url();
 display_verse_html(page)
 
}

document.getElementsByTagName("BODY")[0].onload = display_verse_url;
