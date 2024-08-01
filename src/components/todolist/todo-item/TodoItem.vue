<script setup>
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from "@ant-design/icons-vue";
import { ref, computed } from "vue";

let newTodo = ref("");
let id = 0;
let hideCompleted = ref(false);
let todos = ref([
  {
    id: id++,
    text: "Giặt quần áo",
    done: true,
  },
  {
    id: id++,
    text: "Học tiếng Nhật",
    done: false,
  },
]);
function addTodo() {
  if (newTodo.value) {
    todos.value.push({ id: id++, text: newTodo.value, done: false });
    newTodo.value = "";
  }
}

function editTodo(todo) {
  todo.text = prompt("Edit Todo", todo.text);
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      margin-top: 40px;
      flex-direction: column;
      align-items: center;
      background-color: #f6f6f6;
    "
  >
    <a-form style="display: flex; gap: 30px; flex-direction: row" @submit="addTodo">
      <a-form-item name="Todo" style="width: 30%; min-width: 400px">
        <a-input
          v-model:value="newTodo"
          required
          placeholder="Create Todo!"
          style="height: 50px"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          style="background-color: #4cddd4; width: 50px; height: 50px"
          html-type="submit"
        >
          <template #icon>
            <PlusCircleOutlined style="color: white; font-size: 30px" />
          </template>
        </a-button>
      </a-form-item>
    </a-form>

    <ul style="width: 30%; min-width: 400px">
      <template v-for="todo in filteredTodos" :key="todo.id">
        <div
          style="
            display: flex;
            border: 1px solid #eee;
            min-width: 400px;
            background-color: white;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            padding: 20px;
            margin-bottom: 30px;
          "
        >
          <a-checkbox v-model:checked="todo.done" :class="{ done: todo.done }">
            <li v-if="todo.text !== ''">
              {{ todo.text }}
            </li>
          </a-checkbox>

          <div style="display: flex; gap: 25px">
            <EditOutlined
              style="color: green; font-size: larger"
              @click="editTodo(todo)"
              v-show="!todo.done"
            />
            <DeleteOutlined
              style="color: red; font-size: larger"
              @click="removeTodo(todo)"
            />
          </div>
        </div>
      </template>
    </ul>
  </div>
  <a-button a-button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Show all" : "Hide completed" }}
  </a-button>
  <h1>{{ newTodo }}</h1>
</template>

<style scoped lang="scss">
.done {
  text-decoration: line-through;
  list-style: none;
  color: #bbb;
}
</style>
