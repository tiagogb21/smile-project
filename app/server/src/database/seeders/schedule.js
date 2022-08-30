module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "schedule",
      [
        {
          id: 1,
          createdBy: "admin",
          value: 0,
          status: 0,
          created: new Date(),
          updated: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("schedule", null, {});
  },
};
