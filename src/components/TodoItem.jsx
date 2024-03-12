import React from 'react'

export const TodoItem = ({ todo }) => {

  const { id, task, completed } = todo

  return (
    <li>{task}</li>
  )
}
