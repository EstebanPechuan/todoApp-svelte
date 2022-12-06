<script>
  // import { tasks } from "./store/store.js";
  let newTitle = ''
  let editTask = false
  let indexTaskEdited
  let getStorage = JSON.parse(localStorage.getItem('tasksSvelte'))

  let tasks = (getStorage.length !== 0 && getStorage ) || [
    {
        id: 1,
        title: 'Tarea de ejemplo 1',
    },
    {
        id: 2,
        title: 'Practicar React',
    },
    {
        id: 3,
        title: 'Practicar Svelte',
    }
  ]

  const handleDelete = (el) => {
    tasks = tasks.filter(item => item.id !== el)
  }

  const handleEdit = (el) => {
    let task = tasks.findIndex(item => item.id === el)
    newTitle = tasks[task].title

    // Guardo una variable con el id para eidtar, para ser usado en el submit
    indexTaskEdited = el

    editTask = true
  }

  const newTask = (e) => {
    if (!editTask && newTitle !== '') {
      let newTaskObj = {
        id: tasks[tasks.length - 1].id + 1,
        title: newTitle,
      }

      tasks = tasks.concat(newTaskObj)    
    } else {
      // Uso 'indexTaskEdited' que guardé en handleEdit
      let taskEdited = tasks.find(item => item.id === indexTaskEdited)
      taskEdited.title = newTitle

      tasks = [...tasks]
    }

    e.target.titleTask.value = ''
    newTitle = ''
    editTask = false
  }

  $: window.localStorage.setItem('tasksSvelte', JSON.stringify(tasks))
</script>

<main>
  <div class="content">
    <form class="inputs" on:submit|preventDefault={newTask}>
      <input id="titleTask" type="text" bind:value={newTitle}>
  
      <button class={editTask ? 'editClass' : 'addButon'}>{editTask ? 'Edit' : '+'}</button>
    </form>
    
    <div class="container">
      {#each tasks as task}
        <div class="card">
          <h2>{task.title}</h2>

          <div class="buttons">
            <button on:click={() => handleDelete(task.id)}>Delete</button>
            <button on:click={() => handleEdit(task.id)}>Edit</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>

</style>
