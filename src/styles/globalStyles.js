import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SPACING.medium,
  },
  title: {
    fontSize: FONTS.title,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.small,
  },
  subtitle: {
    fontSize: FONTS.regular,
    color: COLORS.textSecondary,
    marginBottom: SPACING.medium,
  },
  button: {
    marginTop: SPACING.small,
    backgroundColor: COLORS.secondary,
    padding: SPACING.small,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.text,
    fontSize: FONTS.regular,
  },
  page: {
    padding: SPACING.medium,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: FONTS.header,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
    color: COLORS.text,
  },
  text: {
    fontSize: FONTS.regular,
    textAlign: 'justify',
    color: COLORS.text,
    lineHeight: 24,
  },
  storyImage: {
    marginTop: SPACING.medium,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  skillContainer: {
    marginBottom: SPACING.large,
    width: '100%',
  },
  skillTitle: {
    fontSize: FONTS.title,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.small,
  },
  skillImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: SPACING.small,
  },
});
