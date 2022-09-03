module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "schedules",
      [
        {
          id: 1,
          createdBy: "admin",
          client: "user",
          value: "",
          status: "",
          dueDate: "",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("schedules", null, {});
  },
};
