const app = angular.module("todoApp", []);

app.controller("TodoController", function() {
	const $this = this;

	this.archivedList = [];

	this.todoList = [
		{ title: "Learn Angular", done: false },
		{ title: "Build Angular", done: false }
	];

	this.addNewList = function() {
		$this.todoList.push({ title: $this.newTitle, done: false });
		$this.newTitle = "";
	}

	this.getArchivedList = function() {
		const doneItems = $this.todoList.filter(function(item) {
			return item.done;
		});

		if (doneItems.length) {
			return $this.archivedList.concat(doneItems);
		}

		return $this.archivedList;
	}

	this.archive = function () {
		$this.archivedList = $this.getArchivedList();

		$this.todoList = $this.todoList.filter(function(list) {
			return !list.done;
		});
	}

	this.remainingItems = function() {
		return $this.todoList.filter(function(item) {
			return !item.done;
		}).length;
	}
});
