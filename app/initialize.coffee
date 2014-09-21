index = lunr ->
  @field 'title'
  @field 'body'
  @field 'crumbsFlat'
  @ref 'link'

data = null

$ '.edit-btn'
  .tooltip()

findDatum = (link) ->
  for datum in data
    if datum.link is link
      return datum
  null

window.setSearchData = (searchData) ->
  searchData.forEach (data) ->
    index.add data

  data = searchData

$ '.search-form'
  .on 'keyup', (evt) ->
    val = $(evt.target).val()
    results = index.search(val).map((res) -> res.ref).map findDatum
    if val is ''
      results = data
    main = $ '.main'
      .html """
            <h1 class="page-header">Search Results: #{val.toLowerCase()}</h1>
            """
    results.forEach (result) ->
      elem = $ """
        <div class="result row">
          <div class="col-md-12">
            <h3 class="pull-left">
              <a href="#{result.link}">#{result.title}</a>
            </h3>
            <ol class="breadcrumb pull-right"></ol>
          </div>
        </div>
        """
      crumbs = elem.find '.breadcrumb'
      result.crumbs.forEach (crumb) ->
        $ """
            <li class="active">#{crumb.title}</li>
            """
          .appendTo crumbs
      elem.appendTo main
