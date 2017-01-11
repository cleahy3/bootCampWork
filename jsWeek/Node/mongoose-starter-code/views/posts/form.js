<form action="/<%= post.id %>" method="POST">
  <input type="text" name="title" placeholder="Enter a title" value="<%= post.title %>" required>
  <textarea name="body" required> <%= post.body %> </textarea>
 
  <% if(post.id != "") { %>
  <input type="hidden" name="_method" value="PUT">
  <% } %>
  <input type"text" name="rating" placeholder="enter rating" value="<%= post.rating %>" min="0" max="10"/> 
  <input type="submit" value="Save Post">
</form>
