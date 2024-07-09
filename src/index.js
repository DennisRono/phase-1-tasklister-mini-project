document.addEventListener('DOMContentLoaded', () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = document.querySelector('#new-task-description').value
    const task_list = document.querySelector('#tasks')
    const list_item = document.createElement('li')
    list_item.textContent = task
    task_list.append(list_item)
  })
})
