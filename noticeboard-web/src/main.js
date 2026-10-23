import axios from "axios";
import _ from "lodash";

const API_URL = "http://localhost:4000/api/notices";
const list = document.getElementById("notices");

async function loadNotices() {
  try {
    const { data } = await axios.get(API_URL);
    list.innerHTML = data
      .map(
        (n) => `
        <li class="pin ${n.category}">
          <span class="tag">${_.capitalize(n.category)}</span>
          <strong>${n.title}</strong>
          <time>${new Date(n.date).toDateString()}</time>
        </li>`
      )
      .join("");
  } catch (err) {
    list.innerHTML =
      '<li class="muted">Can’t reach the API. Start noticeboard-api with <code>npm start</code>, then refresh.</li>';
  }
}

loadNotices();
