import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';
import * as Device from 'expo-device';
import { Alert } from 'react-native';
import * as StoreReview from 'expo-store-review';

const showAds = async callback => {
  const adsViewTodayJSON = await AsyncStorage.getItem('todayView');
  const adsViewToday = JSON.parse(adsViewTodayJSON || '{}');
  if (adsViewToday.clicks <= 5) {
    await AdMobInterstitial.setAdUnitID(
      'ca-app-pub-6179656158473202/3061477726',
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    AdMobInterstitial.addEventListener('interstitialDidClose', () => {
      callback();
    });
    await AdMobInterstitial.showAdAsync();
  } else {
    await AdMobRewarded.setAdUnitID('ca-app-pub-6179656158473202/5653720150');
    await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true });
    AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', () => {
      callback();
    });
    await AdMobRewarded.showAdAsync();
  }
};

const checkTodayClicks = async callback => {
  const adsViewTodayJSON = await AsyncStorage.getItem('todayView');
  const adsViewToday = JSON.parse(adsViewTodayJSON || '{}');
  const today = new Date().getDate();
  if (adsViewToday?.date !== today) {
    await AsyncStorage.setItem(
      'todayView',
      JSON.stringify({
        date: today,
        clicks: adsViewToday?.clicks + 1,
      }),
    );
    callback();
    return true;
  }
};

export const showAdsOrModal = async (
  callback: () => void,
  premium?: boolean,
) => {
  try {
    if (premium && Device.osName === 'Android') {
      const InAppPurchases = require('expo-in-app-purchases');
      await InAppPurchases.connectAsync();
      const subscriptions = await InAppPurchases.getPurchaseHistoryAsync();
      if (subscriptions.results?.filter(r => r.purchaseState === 1)) {
        Alert.alert(JSON.stringify(subscriptions));
        callback();
        return;
      }
      await InAppPurchases.disconnectAsync();
    }
    const runnedCallback = await checkTodayClicks(callback);
    if (runnedCallback) {
      return;
    }
    await showAds(callback);
    if (await StoreReview.hasAction()) {
      StoreReview.requestReview();
    }
  } catch (e) {
    callback();
  }
};
