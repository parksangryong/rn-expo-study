import { BASE_URL } from "@/api/axios";
import queryClient from "@/api/queryClient";
import AvatarList from "@/components/AvatarList";
import FixedButtonCTA from "@/components/FixedButtonCTA";
import Tab from "@/components/Tab";
import { colors, queryKeys } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import useGetAvatarItems from "@/hooks/queries/useGetAvatarItems";
import { getImageId } from "@/utils/images";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import { SvgUri } from "react-native-svg";
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

  const getAvatarItemUrl = (category: string, id?: string) => {
    if (category === "default" || !Boolean(id)) {
      return `${BASE_URL}/default/frame.svg`;
    }
    return `${BASE_URL}/items/${category}/${id}.svg`;
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
          queryClient.invalidateQueries({
            queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
          });
          queryClient.invalidateQueries({
            queryKey: [
              queryKeys.POST,
              queryKeys.GET_POSTS,
              queryKeys.GET_MY_POSTS,
            ],
          });
          queryClient.invalidateQueries({
            queryKey: [
              queryKeys.POST,
              queryKeys.GET_POSTS,
              queryKeys.GET_LIKED_POSTS,
            ],
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
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            {avatarItems.hatId && (
              <SvgUri
                uri={getAvatarItemUrl("hats", avatarItems.hatId)}
                style={[styles.avatar, { zIndex: 70 }]}
              />
            )}
            {avatarItems.faceId && (
              <SvgUri
                uri={getAvatarItemUrl("faces", avatarItems.faceId)}
                style={[styles.avatar, { zIndex: 60 }]}
              />
            )}
            {avatarItems.topId && (
              <SvgUri
                uri={getAvatarItemUrl("tops", avatarItems.topId)}
                style={[styles.avatar, { zIndex: 50 }]}
              />
            )}
            {avatarItems.bottomId && (
              <SvgUri
                uri={getAvatarItemUrl("bottoms", avatarItems.bottomId)}
                style={[styles.avatar, { zIndex: 40 }]}
              />
            )}
            <SvgUri
              uri={getAvatarItemUrl("default")}
              style={[styles.avatar, { zIndex: 30 }]}
            />
            {avatarItems.skinId && (
              <SvgUri
                uri={getAvatarItemUrl("skins", avatarItems.skinId)}
                style={[styles.avatar, { zIndex: 20 }]}
              />
            )}
            {avatarItems.handId && (
              <SvgUri
                uri={getAvatarItemUrl("hands", avatarItems.handId)}
                style={[styles.avatar, { zIndex: 10 }]}
              />
            )}
          </View>
        </View>
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
  headerContainer: {
    alignItems: "center",
    position: "relative",
    backgroundColor: colors.ORANGE_200,
    width: "100%",
    height: 115,
    marginBottom: 115,
  },
  avatarContainer: {
    position: "absolute",
    width: 229,
    height: 229,
    borderWidth: 1,
    borderRadius: 229,
    borderColor: colors.GRAY_200,
    backgroundColor: colors.WHITE,
  },
  tabContainer: {
    flexDirection: "row",
  },
  pagerView: {
    flex: 1,
  },
  avatar: {
    width: 229,
    height: 229,
    position: "absolute",
  },
});

export default AvatarScreen;
