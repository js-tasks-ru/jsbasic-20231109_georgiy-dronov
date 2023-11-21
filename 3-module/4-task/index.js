function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)
    .map(result => `${result.name}, ${result.balance}`)
    .join('\n')
}
