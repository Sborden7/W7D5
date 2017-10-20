
export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    data: user,
    url: 'api/users',
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    data: user,
    url: 'api/sessions',
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/sessions',
  });
};
