import AvatarList from "@/components/AvatarList";
import FixedButtonCTA from "@/components/FixedButtonCTA";
import Tab from "@/components/Tab";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import useGetAvatarItems from "@/hooks/queries/useGetAvatarItems";
import { getImageId } from "@/utils/images";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import Toast from "react-native-toast-message";

const AvatarScreen = () => {
  const { auth, updateProfileMutation } = useAuth();
  const navigation = useNavigation();
  const { hats, faces, tops, bottoms, hands, skins } = useGetAvatarItems();
  const [currentTab, setCurrentTab] = useState(0);
  const [avatarItems, setAvatarItems] = useState({
    hatId: auth.hatId,
    handId: auth.handId,
    skinId: auth.skinId,
    topId: auth.topId,
    faceId: auth.faceId,
    bottomId: auth.bottomId,
  });
  const pagerViewRef = useRef<PagerView>(null);

  const handleTabPress = (index: number) => {
    pagerViewRef.current?.setPage(index);
    setCurrentTab(index);
  };

  const handleSelect = (name: string, id: string) => {
    setAvatarItems({ ...avatarItems, [name]: getImageId(id) });
  };

  const handleSave = () => {
    updateProfileMutation.mutate(
      {
        ...avatarItems,
      },
      {
        onSuccess: () => {
          Toast.show({
            type: "success",
            text1: "아바타 변경이 완료되었습니다.",
          });
          router.back();
        },
      }
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.ORANGE_200,
      },
    });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {["모자", "얼굴", "상의", "하의", "손", "피부"].map((item, index) => (
            <Tab
              key={item}
              isActive={currentTab === index}
              onPress={() => handleTabPress(index)}
            >
              {item}
            </Tab>
          ))}
        </View>
        <PagerView
          ref={pagerViewRef}
          initialPage={0}
          onPageSelected={(e) => setCurrentTab(e.nativeEvent.position)}
          style={styles.pagerView}
        >
          <AvatarList
            data={hats}
            key="1"
            onSelect={(id) => handleSelect("hatId", id)}
            isSelected={avatarItems.hatId}
          />
          <AvatarList
            data={faces}
            key="2"
            onSelect={(id) => handleSelect("faceId", id)}
            isSelected={avatarItems.faceId}
          />
          <AvatarList
            data={tops}
            key="3"
            onSelect={(id) => handleSelect("topId", id)}
            isSelected={avatarItems.topId}
          />
          <AvatarList
            data={bottoms}
            key="4"
            onSelect={(id) => handleSelect("bottomId", id)}
            isSelected={avatarItems.bottomId}
          />
          <AvatarList
            data={hands}
            key="5"
            onSelect={(id) => handleSelect("handId", id)}
            isSelected={avatarItems.handId}
          />
          <AvatarList
            data={skins}
            key="6"
            onSelect={(id) => handleSelect("skinId", id)}
            isSelected={avatarItems.skinId}
          />
        </PagerView>
      </View>
      <FixedButtonCTA
        label="저장"
        onPress={handleSave}
        showBottomBorder={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
  },
  pagerView: {
    flex: 1,
  },
});

export default AvatarScreen;
