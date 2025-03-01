const discoverNewToday = document.getElementById("discover-new-today");
if (discoverNewToday) {
	discoverNewToday.addEventListener("click", function () {
		window.location.href = "blogs.html";
	});
}

const backToDesk = document.getElementById("back-to-desk");
if (backToDesk) {
	backToDesk.addEventListener("click", function () {
		window.location.href = "index.html";
	});
}

function randomColor() {
	let randomNumber = Math.floor(Math.random() * 256 * 256 * 256);
	let hexString = randomNumber.toString(16).padStart(6, "0");
	return `#${hexString}`;
}

document.getElementById("color-btn").addEventListener("click", function () {
	document.body.style.backgroundColor = randomColor();
});

let taskAssigned = 6;
let taskCompleted = 23;
const taskCompletedEl = document.getElementById("task-completed");
const taskAssignedEl = document.getElementById("task-assigned");
const taskCompletedItems = document.querySelectorAll(".task-completed");
const activityLogContainer = document.getElementById("activity-log-message-container");

function getCurrentTime() {
	const now = new Date();
	return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
}

if (taskCompletedItems) {
	for (let task of taskCompletedItems) {
		task.addEventListener("click", function (event) {
			if (!this.disabled) {
				alert("Board Updated Successfully");
				if (taskAssigned > 0) {
					taskAssigned--;
					taskCompleted++;
				}
				if (taskAssignedEl && taskCompletedEl) {
					taskAssignedEl.textContent = taskAssigned;
					taskCompletedEl.textContent = taskCompleted;
				}

				let taskTitle = this.closest(".task-col").querySelector(".task-title").textContent;

				const activityLog = document.createElement("p");
				activityLog.classList.add("bg-light-blue", "p-2.5", "rounded-lg", "mb-7");
				activityLog.textContent = `You have completed the task ${taskTitle} at ${getCurrentTime()}`;
				activityLogContainer.appendChild(activityLog);

				this.disabled = true;

				if (taskAssigned === 0) {
					alert("Congrats!!! You have completed all the current task");
				}
			}
		});
	}
}

const clearTaskLogBtn = document.getElementById("clear-task-log-btn");
if (clearTaskLogBtn) {
	clearTaskLogBtn.addEventListener("click", function () {
		activityLogContainer.innerHTML = "";
	});
}

function todaysDate() {
	const today = new Date();
	let dayFormat = { weekday: "short" };
	let dayName = today.toLocaleDateString("en-US", dayFormat);

	let dateFormat = { month: "short", day: "numeric", year: "numeric" };
	let fullDate = today.toLocaleDateString("en-US", dateFormat);

	document.getElementById("day").innerText = dayName;
	document.getElementById("fullDate").innerText = fullDate;
}
todaysDate();
