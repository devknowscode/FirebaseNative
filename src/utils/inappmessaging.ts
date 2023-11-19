import inAppMessaging from '@react-native-firebase/in-app-messaging';

async function InAppMessaging() {
  await inAppMessaging().setMessagesDisplaySuppressed(true);
}

export default InAppMessaging;
