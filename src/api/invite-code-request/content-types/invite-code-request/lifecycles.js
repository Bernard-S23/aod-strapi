module.exports = {
  async beforeUpdate(event) {
    const { data, where, select, populate } = event.params;

    if (data.Approved) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      function generateString(length) {
        let result = " ";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }

        return result;
      }

      const invitationCode = generateString(5);

      await strapi.service("api::doer.doer").create({
        data: { Email: data.Email, InvitationCode: invitationCode },
      });

      await strapi.plugins["email"].services.email.send({
        to: `${data.Email}`,
        from: "hussain@viabletree.com",
        subject: "Invitation Code From Army Of Doers",
        text: `${invitationCode}`,
      });
    } else {
      throw "You can not perform this action";
    }
  },
};
