//your JS code here. If required.
 const submitButton = document.getElementById("submit");
        const bookList = document.getElementById("book-list");
        
        // Add book to the table when submit button is clicked
        submitButton.addEventListener("click", function() {
            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const isbn = document.getElementById("isbn").value;

            if (title && author && isbn) {
                // Create a new row with the input data
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td><button class="delete btn btn-danger btn-sm">Clear</button></td>
                `;

                // Add the row to the table body
                bookList.appendChild(row);

                // Clear the input fields
                document.getElementById("title").value = '';
                document.getElementById("author").value = '';
                document.getElementById("isbn").value = '';
            } else {
                alert("Please fill in all fields!");
            }
        });

        // Event delegation to handle delete button click
        bookList.addEventListener("click", function(event) {
            if (event.target && event.target.classList.contains("delete")) {
                // Remove the row when delete button is clicked
                const row = event.target.closest("tr");
                row.remove();
            }
        });