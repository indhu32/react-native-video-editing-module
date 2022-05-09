import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-video-editing-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type VideoEditingModuleProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'VideoEditingModuleView';

export const VideoEditingModuleView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<VideoEditingModuleProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
