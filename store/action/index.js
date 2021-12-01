export const AddBusiness = (title, group) => {
  const action = {
    type: "ADDBUISNESS",
    title,
    group,
  };
  return action;
};

export const AddPersonal = (title, group) => {
  const action = {
    type: "ADDPERSONAL",
    title,
    group,
  };
  return action;
};

export const RemoveTask = (group, id) => {
  const action = {
    type: "DELETETASK",
    group,
    id,
  };
  return action;
};

export const InitiateTask = (
  tasks,
  buisnesstotal,
  personaltotal,
  buisnessolved,
  personalsolved
) => {
  const action = {
    type: "INITIAL",
    tasks,
    buisnesstotal,
    personaltotal,
    buisnessolved,
    personalsolved,
  };
  return action;
};
