const { AuthenticationError } = require("apollo-server-express");
const { User, Medication, Histrxn } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          "medications"
        );

        user.medications.sort({ createdAt: -1 });
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },

    medications: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          "medications"
        );
        return user.medications;
      }
      throw new AuthenticationError("Not logged in");
    },

    medication: async (parent, { medicationId }) => {
      return Medication.findOne({ _id: medicationId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email or login is incorrect!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Email or login is incorrect!");
      }

      const token = signToken(user);

      return { token, user };
    },

    addMedication: async (
      parent,
      { medName, strength, direction, prescriber, allergic, reaction },
      context
    ) => {
      if (context.user) {
        const medication = await Medication.create({
          medName,
          strength,
          direction,
          prescriber,
          allergic,
          reaction,
        });

        await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { medications: medication._id } },
          {
            new: true,
            runValidators: true,
          }
        );

        return medication;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // updateMedication: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { medications: medication._id } },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },

    removeMedication: async (parent, { medicationId }, context) => {
      if (context.user) {
        const medication = await Medication.findOneAndDelete({
          _id: medicationId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { medications: medication._id } }
        );

        return medication;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
